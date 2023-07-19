from django.urls import path, include

urlpatterns = [
    path('translate/', include('translator.urls')),
]
