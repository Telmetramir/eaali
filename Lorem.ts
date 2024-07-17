interface ChannelDefinition {
    name: string;
    frequency: number;
    // other properties...
}

const out: { [key: string]: ChannelDefinition } = {};

function assignChannel(channel: string, channelDef: any) {
    // Cast `channelDef` to `ChannelDefinition`
    out[channel] = channelDef as ChannelDefinition;
}

// Example usage
const myChannelDef = {
    name: "Channel 1",
    frequency: 101.1
    // other properties...
};

assignChannel("music", myChannelDef);

console.log(out.music); // Output: { name: "Channel 1", frequency: 101.1 }
