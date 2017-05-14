import dateFormat from 'dateformat';

export const parseReq = (req) => {
    try {
        const param = decodeURI(req.url.substr(1));
        let date = new Date(Date.parse(param));
        if (param > 0) {
            date = new Date(param*1000);
        }
        
        return {
            natural: dateFormat(date, "mmmm dd, yyyy"), 
            unix: date.getTime()/1000
        };
    } catch (e) {
        return {
            natural: null, 
            unix: null
        }
    }
}
