__author__ = 'buyvich'


import logging
from tornado.ioloop import IOLoop
from tornado.web import Application, url
from tornado.options import options

from handlers import *

#options.log_file_prefix = 'logs/dayplanner.log'

PORT = 9090

app = Application([
    url(r'/hello', HelloHandler),
    url(r'/', IndexHandler)
],
    debug=True,
    static_path='public',
    template_path='templates')

if __name__ == '__main__':
    tornado.log.enable_pretty_logging()
    logging.info('Start server: %s', PORT)
    tornado.options.parse_command_line()
    app.listen(PORT)
    IOLoop.current().start()
