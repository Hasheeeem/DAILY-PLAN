import http.server
import socketserver
import os

PORTS = [3000, 3005, 8080]

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    socketserver.TCPServer.allow_reuse_address = True
    
    for port in PORTS:
        try:
            httpd = socketserver.TCPServer(("", port), NoCacheHTTPRequestHandler)
            print(f"Serving HTTP on http://localhost:{port} from {web_dir} (no cache)...")
            httpd.serve_forever()
            break
        except OSError:
            continue
