- Client connected:
    - action : client_connected
    - client_id :
    - username :
    - keepalive :
    - ipaddress :
    - proto_ver :
    - connected_at :
    - conn_ack :

- Client disconnected
    - action : client_disconnected
    - client_id :
    - username :
    - reason :

- client subscribe
    - action : client_subscribe
    - client_id : 
    - username :
    - topic :
    - opts :

- client unsubscribe
    - action : session_created
    - client_id : 
    - username :
    - topic :

- client terminated
    - action: session_terminated
    - client_id : 
    - username : 
    - reason

- message publish
    - action: message_publish
    - from_client_id :
    - from_username :
    - topic :
    - qos :
    - retain :
    - payload :
    - ts :

- message deliver
    - action : message_delivered
    - client_id : 
    - username :
    - from_client_id: 
    - from_username :
    - topic:
    - qos :
    - retain :
    - payload :
    - ts :

- message acked
    - action : message_acked
    - client_id : 
    - username :
    - from_client_id :
    - from_username :
    - topic :
    - qos :
    - retain :
    - payload :
    - ts :