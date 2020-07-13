# -*- coding: utf-8 -*-
# @Time    : 2020/7/8 9:16
# @Author  : xukang xie
# @FileName: urls.py
# @Software: PyCharm


from django.urls import path
from .views import IndexView
from django.views.generic import TemplateView #django自带的静态页面管理器

urlpatterns = [
    path('', IndexView.as_view(), name="index"),
]