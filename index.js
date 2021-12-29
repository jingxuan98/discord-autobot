const dc = require('./discord');
const { sig } = require("./utils/sig");

(async () => {
    sig();

    await dc.initialize();
    // here is where you enter your email and password
    await dc.login('replace with your discord email', 'replace with your discord password')
    
    const interval = 15000; // 15000 means 15secs
    const sendinterval = 0.3 // 0.3 means 18 secs, 0.3 X 60 sec = 18 secs

    await setTimeout(dc.likeChannelProcess('922481145252282408', '922481145252282411', sendinterval) ,interval) // 1 = 1 minute

    debugger;

})();
