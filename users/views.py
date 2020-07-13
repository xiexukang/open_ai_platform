from django.shortcuts import render
from django.views.generic.base import  View
from django.db.models import Q
from django.contrib.auth import authenticate,login,logout
# Create your views here.
from django.contrib.auth.hashers import make_password
from .models import User
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
class LoginView(View):
    def get(self, request):
        return render(request,"login.html", {"Msg": None})

    def post(self,request):
        user_name = request.POST.get("username", "")
        pass_word = request.POST.get("password", "")
        print(user_name)
        print(pass_word)
        user = authenticate(username=user_name,password=pass_word)
        if user is not None:
            login(request,user)
            return HttpResponseRedirect(reverse('ai_platform:index'))
        return  render(request, "login.html")
class RegisterView(View):
    def get(self, request):
        return render(request, "register.html",{"Msg":None})

    def post(self, request):
        user_name = request.POST.get("username","")
        email = request.POST.get("email","")


        if User.objects.filter(Q(email=email)|Q(username=user_name)):
            return render(request, "register.html", {"Msg":True})
        pass_word = request.POST.get("password","")
        user_profile = User()
        user_profile.username = user_name
        user_profile.email = email
        user_profile.is_active = True
        user_profile.password = make_password(pass_word)
        user_profile.save()
        return render(request,"login.html",{"Msg":None})


class LogoutView(View):
    '''退出登录'''
    def get(self,request):
        logout(request)
        return HttpResponseRedirect(reverse('ai_platform:index'))

from utils.base_util import LoginRequiredMixin
class HomeView(LoginRequiredMixin,View):
    '''退出登录'''
    def get(self,request):

        return render(request,'Usercenter/home.html')


class ResourceView(LoginRequiredMixin,View):
    '''退出登录'''
    def get(self,request):

        return render(request,'Usercenter/ai_resource.html')






