from django.conf import settings
from django.shortcuts import render


def _secret_context():
    return {
        'WEATHER_API_KEY': settings.WEATHER_API_KEY,
        'API_KEY': settings.API_KEY,
    }


def RegistrationPage(request):
    return render(request, 'index.html')


def LoginPage(request):
    return render(request, 'login.html')


def DistrictPage(request):
    return render(request, 'district.html')


def CropsPage(request):
    return render(request, 'crops.html', _secret_context())


def DiseaseDetectPage(request):
    return render(request, 'disease_detect.html')


def DiseaseDetailsPage(request):
    return render(request, 'disease_details.html', _secret_context())


def SoundPage(request):
    return render(request, 'sound.html')
