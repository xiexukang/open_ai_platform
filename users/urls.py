# -*- coding: utf-8 -*-
# @Time    : 2020/7/8 9:21
# @Author  : xukang xie
# @FileName: urls.py
# @Software: PyCharm

from django.urls import path
from .views import LoginView, RegisterView,LogoutView,HomeView,ResourceView
from django.views.generic import TemplateView #django自带的静态页面管理器

urlpatterns = [
    path('login/', LoginView.as_view(), name="login"),
    path('register/', RegisterView.as_view(), name="register"),
    path('loginout/', LogoutView.as_view(),name="loginout"),
    path('home/', HomeView.as_view(), name="home"),
    path('resource/',ResourceView.as_view(),name="resource"),
]