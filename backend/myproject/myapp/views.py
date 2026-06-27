from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated

# Create your views here.
class RegisterView(APIView):
    permission_classes=[AllowAny]
    def post(self,request):
        username=request.data.get("username")
        password=request.data.get("password")
        User = get_user_model()
        if User.objects.filter(username=username).exists():
            return Response({"detail":"User already exists"},status=400)
        user = User.objects.create_user(username=username,password=password)
        login(request,user)
        return Response({"detail":"User registered"},status=201)


class LoginView(APIView):
    permission_classes=[AllowAny]
    def post(self,request):
        username=request.data.get("username")
        password=request.data.get("password")
        user = authenticate(request,username=username,password=password)
        if user is None:
            return Response({"detail":"User does not exist"},status=400)
        login(request,user)
        return Response({"detail":"Logged in"},status=200)
    

class LogoutView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        logout(request)
        return Response({"detail":"Logged out"},status=200)
    
