# -*- coding: utf-8 -*-
# @Time    : 2020/7/5 15:27
# @Author  : xukang xie
# @FileName: adminx.py
# @Software: PyCharm
import xadmin
from xadmin import views

# 修改xadmin的基础配置
class BaseSetting(object):
    # 允许使用主题
    enable_themes = True
    use_bootswatch = True


# 修改xadmin的全局配置
class GlobalSetting(object):
    site_title = '人工智能开放创新平台'
    site_footer = 'Copyright © 2020 JN418. Powered by Django,Xadmin.'

    # Models收起功能
    menu_style = 'accordion'


xadmin.site.register(views.CommAdminView, GlobalSetting)
xadmin.site.register(views.BaseAdminView,BaseSetting )