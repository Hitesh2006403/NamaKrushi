"""
URL configuration for Namakrushi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.RegistrationPage, name='index'),
    path('index.html', views.RegistrationPage, name='index_html'),
    path('login.html', views.LoginPage, name='login'),
    path('district.html', views.DistrictPage, name='district'),
    path('crops.html', views.CropsPage, name='crops'),
    path('disease_detect.html', views.DiseaseDetectPage, name='disease_detect'),
    path('disease_details.html', views.DiseaseDetailsPage, name='disease_details'),
    path('sound.html', views.SoundPage, name='sound'),
]
