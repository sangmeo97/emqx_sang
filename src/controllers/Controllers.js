exports.webhook = function(req,res)
{
    switch(req.body.action)
    {
        case 'client_connected': console.log('client_connected'); 
        break;
        case 'client_disconnected' : console.log('client_disconnected'); 
        break;
        case 'client_subscribe' : console.log('client_subscribe'); 
        break;
        case 'client_unsubscribed': console.log('client_unsubscribed'); 
        break;
        case 'session_created' : console.log('session_created'); 
        break;
        case 'session_terminated': console.log('session_terminated'); 
        break;
        case 'message_publish' : console.log('message_publish');
        break;
        case 'message_delivered': console.log('message_delivered'); 
        break;
        case 'message_acked': console.log('message_acked'); 
        break;
    }
}