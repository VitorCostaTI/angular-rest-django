from rest_framework import viewsets
from .models import Member
from .serializers import Member


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializers_class = MemberSerializer

