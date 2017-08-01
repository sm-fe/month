const exec = require('child_process').exec;

const unSafeKey = [
	'atatech.org',
	'gitlab.alibaba-inc.com',
	'site.alipay.net'
];

const cmdStr = `git grep -n -e ${unSafeKey.join(' -e ')} -- './*' ':!${require('path').basename(__filename)}'`;
exec(cmdStr, function(err,stdout,stderr){
    if(err) {
        console.error(stderr);
    } else {
        if (stdout.length > 0) {
        	console.log('提交含有铭感信息，请处理！');
        	console.log(stdout);
        	process.exit(0);
        }
    }
});
