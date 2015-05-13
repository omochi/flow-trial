declare class Buffer {

}

declare module http {
	declare class Server {
		listen(port: number, hostname?: string, backlog?: number, callback?: ()=> void): void;
	}
	declare class ServerResponse {
		writeContinue(): void;
		writeHead(statusCode: number, headers?: { [key: string]: string }): void;
		writeHead(statusCode: number, statusMessage?: string, headers?: { [key: string]: string }): void;
		write(chunk: string, encoding?: string, callback?: ()=> void): void;
		end(chunk?: string, encoding?: string, callback?: ()=> void): void;
	}
	declare class IncomingMessage {

	}
	declare function createServer(requestListener?: (req: IncomingMessage, res: ServerResponse)=> void): Server;
}
