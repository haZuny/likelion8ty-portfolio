from django.shortcuts import render

# Create your views here.
def profile(request):
    return render(request, 'Profile.html')
def projects(request):
    return render(request, 'Projects.html')
def language(request):
    return render(request, 'Language.html')
