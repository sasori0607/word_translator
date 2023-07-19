from django.shortcuts import render
from django.http import JsonResponse
from translator.utils import lingvolive_translate


def translate_view(request):
    if request.method == 'POST':
        translation = lingvolive_translate(request)
        return JsonResponse({'translation': translation})

    return render(request, 'translate.html')
