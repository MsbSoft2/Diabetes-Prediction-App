from django.contrib import admin
from .models import Person

# Register your models here.
@admin.register(Person)
class PersonModelAdmin(admin.ModelAdmin):
    list_display = ['fullName','gender','diabet']
    list_filter = ['diabet']