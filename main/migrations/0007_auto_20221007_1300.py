# Generated by Django 3.2.7 on 2022-10-07 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_customorder_side_height'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='furniture_list',
        ),
        migrations.AlterField(
            model_name='customuser',
            name='company_phone',
            field=models.CharField(max_length=150),
        ),
        migrations.DeleteModel(
            name='Furniture',
        ),
        migrations.DeleteModel(
            name='Order',
        ),
    ]
