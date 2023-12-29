from django.shortcuts import render

interviews = [
        {
                'topic': 'Artificial Intelligence',
                'guest': 'Sam Altman',
                'host_station': 'Citizen TV',
                'guest_work': 'CEO, OpenAI',
                'date_posted': 'August 27, 2018'
        },
        {
                'topic': 'Life on Mars',
                'guest': 'Elon Musk',
                'host_station': 'NTV',
                'guest_work': 'CEO, SpaceX',
                'date_posted': 'August 28, 2018'
        },
        {
                'topic': 'The Future of Humanity',
                'guest': 'Max Tegmark',
                'host_station': 'KTN',
                'guest_work': 'CEO, Future of Life Institute',
                'date_posted': 'August 29, 2018'
        },
        {
                'topic': 'Hacker Culture',
                'guest': 'Paul Graham',
                'host_station': 'KBC',
                'guest_work': 'Co-founder, Y Combinator',
                'date_posted': 'August 30, 2018'
        },
        {
                'topic': 'Google and the Future of Search',
                'guest': 'Larry Page',
                'host_station': 'K24',
                'guest_work': 'Co-founder, Google',
                'date_posted': 'August 31, 2018'
        },
        {
                'topic': 'Apple and the Future of Product Design',
                'guest': 'Jony Ive',
                'host_station': 'Kiss TV',
                'guest_work': 'Chief Design Officer, Apple',
                'date_posted': 'September 1, 2018'
        }
]


def home(request):
        return render(request, 'blog/home.html')

def about(request):
        return render(request, 'blog/about.html')

def contact(request):
        return render(request, 'blog/contact.html')

def blog(request):
        context = {
                'interviews': interviews
        }
        return render(request, 'blog/blog.html', context)