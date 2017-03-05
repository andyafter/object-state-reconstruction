from django.db import models
from app.models import Model
from django.db import DatabaseError
from django.utils.encoding import python_2_unicode_compatible
from django.conf import settings
from django.dispatch import receiver


class Table(Model):
    object_id = models.CharField(max_length=256, blank=True)
    object_type = models.CharField(max_length=256, blank=True)
    timestamp = models.CharField(max_length=256, blank=True)
    info = models.TextField(blank=True)
