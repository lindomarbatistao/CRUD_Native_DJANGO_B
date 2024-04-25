# Generated by Django 5.0.3 on 2024-04-02 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255)),
                ('rua', models.CharField(max_length=255)),
                ('bairro', models.CharField(max_length=255)),
                ('cidade', models.CharField(max_length=255)),
                ('uf', models.CharField(max_length=2)),
                ('cep', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('numero', models.CharField(max_length=255)),
            ],
        ),
    ]
