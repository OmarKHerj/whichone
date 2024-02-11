from django.urls import path
from .  import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.home,name='home'),
    path('category/', views.category,name='category'),
    path('posts/<str:pk>/', views.postdetail, name='post_detail'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)