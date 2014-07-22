__author__ = 'buyvich'

import tornado
from tornado.web import RequestHandler


class HelloHandler(RequestHandler):

    @tornado.web.asynchronous
    def get(self):
        self.write("Hello, world")


class IndexHandler(RequestHandler):

    def get(self):
        self.render('index.html')
