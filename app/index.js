var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read(); // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction.toLowerCase()) {
			case '/help':
				process.stdout.write(
					'=== HELP MENU ===\n'+
					'Type /info to show process.env info\n'+
					'Type /version or /ver to show version of node info\n'+
					'Type /getosinfo or /goi to show os info\n'+
					'Type /exit to exit app\n'+
					'=== HELP MENU ENDS ==='
				);
			break;
			
			case '/ver':
			case '/version':
				process.stdout.write(JSON.stringify(process.versions));
			break;
			
			case '/goi':
			case '/getosinfo':
				OSinfo.print();
			break;
			
			case '/sayhello':
				process.stdout.write('Hello!');
			break;
			
			case '/info':
				process.stdout.write(JSON.stringify(process.env));
			break;
			
			case '/exit':
				process.stdout.write('Quitting app!');
				process.exit();
			break;
			
			default:
				process.stderr.write('Wrong instruction!\n\x1b[31mType /help for help.\x1b[0m');
			break;
        }
		process.stdout.write('\n');
    }
});
process.stdout.write('Hi, tell me commands, I\'m listening You!\n');