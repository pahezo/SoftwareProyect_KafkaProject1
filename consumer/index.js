//import Kafka from 'node-rdkafka';     // New ES6/ES2015 modules way
const Kafka = require('node-rdkafka');  // Old CommonJS way

console.log("*** Consumer starts... ***");

const consumer = Kafka.KafkaConsumer({
    'group.id':'kafka',
    'metadata.broker.list':'localhost:9092'
}, {});

consumer.connect();

consumer.on('ready', () => {
    console.log('consumer ready...');
    consumer.subscribe(['task']);
    consumer.consume();
}).on('data', (data) => {
    console.log(`received message: ${data.value}`);
});
