const dc = require('./discord');
const { sig } = require("./utils/sig");

(async () => {
    sig();

    await dc.initialize();
    // here is where you enter your email and password
    await dc.login('enter your email', "enter your password")
    
    const interval = 15000; // 15000 means 15secs
    const sendinterval = 2.15 // 0.3 means 18 secs, 0.3 X 60 sec = 18 secs | 1 means 1 minute | 2 means 2 minute

    await setTimeout(dc.likeChannelProcess('922481145252282408', '922483862557306950', sendinterval) ,interval) // 1 = 1 minute

    debugger;

})();
