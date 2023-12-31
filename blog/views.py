from django.shortcuts import render

posts = [
        {
                'author': 'Alex Mwaniki',
                'title': 'Blog Post 1',
                'content': 'This is Blog Post 1',
                'date_posted': '31-Dec 2023'
        },
        {
                'author': 'Alex Mwaniki',
                'title': 'Blog Post 2',
                'content': 'This is Blog Post 2',
                'date_posted': '31-Dec 2023'
        }
]

def index(request):
        context = {
                'posts': posts
        }
        return render(request, 'blog/index.html', context)

def about(request):
        return render(request, 'blog/about.html', { 'title': 'About' })