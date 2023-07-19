import requests
from main.constants import API_KEY



def lingvolive_translate(request, api_key=API_KEY):
    response_get_token = requests.post(
        'https://developers.lingvolive.com/api/v1.1/authenticate',
        headers={'Authorization': 'Basic ' + api_key}
    )
    params = {
        'text': request.POST.get('text'),
        'srcLang': request.POST.get('src_lang'),
        'dstLang': request.POST.get('dst_lang'),
    }
    response = requests.get(
        'https://developers.lingvolive.com/api/v1/Minicard',
        params=params,
        headers={'Authorization': 'Bearer ' + response_get_token.text}

    )
    if response.status_code == 200:
        return response.json()['Translation']['Translation']

    return 'Вибачте, сталась помилка під час перекладу, спробуйте ще раз'
