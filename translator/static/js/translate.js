$(document).ready(function() {
    $('#translate-form').on('submit', function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        var text = $('#text-input').val();

        formData += '&text=' + encodeURIComponent(text);

        $.ajax({
            url: '/translate/',
            type: 'POST',
            data: formData,
            headers: {
                'X-CSRFToken': getCookie('csrftoken')
            },
            success: function(response) {
                $('#translation-output').val(response.translation);
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });
});


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


function updateDestinationLanguages() {
    var srcLang = $("#src-lang-select").val();
    var dstLangSelect = $("#dst-lang-select");

    dstLangSelect.empty();
    dstLangSelect.append('<option value="">На яку перекладаємо</option>');
    if (srcLang === "1049") {
        dstLangSelect.append('<option value="1033">Англійська</option>');
        dstLangSelect.append('<option value="1031">Німецька</option>');
        dstLangSelect.append('<option value="1040">Італійська</option>');
    }
    else if (srcLang === "1033") {
        dstLangSelect.append('<option value="1049">Російська</option>');
    }
    else if (srcLang === "1031") {
        dstLangSelect.append('<option value="1049">Російська</option>');
    }
    else if (srcLang === "1040") {
        dstLangSelect.append('<option value="1049">Російська</option>');
    }
    else if (srcLang === "1036") {
        dstLangSelect.append('<option value="1049">Російська</option>');
    }

}
