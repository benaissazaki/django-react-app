from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from .serializers import UserSerializer
from rest_framework.response import Response

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_current_user(request):
    if not request.user.is_authenticated:
        return Response(status=403)

    user_data = UserSerializer(request.user)
    return Response(data=user_data.data, status=200)