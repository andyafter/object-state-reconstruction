from django.db import models
from django.db import DatabaseError
from django.utils.encoding import python_2_unicode_compatible
from django.conf import settings
from django.dispatch import receiver


@python_2_unicode_compatible
class Table(models.model):
    id = models.CharField(max_length=256, blank=True)
    timestamp = models.CharField(max_length=256, blank=True)
    info = models.TextField(blank=True)
