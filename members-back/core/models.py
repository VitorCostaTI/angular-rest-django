from django.db import models

class Member(models.Model):
    name =  models.CharField(max_length=30)
    surname =  models.CharField(max_length=30)
    phone =  models.CharField(max_length=30)
    email = models.EmailField()
    address = models.CharField(max_length=30)
    photo = models.ImageField(upload_to='members_profile')

    def __str__(self):
        return self.name + " " + self.surname