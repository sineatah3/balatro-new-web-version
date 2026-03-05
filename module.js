window.getSource = async function() {const b=new Uint8Array(await (await fetch("https://rawcdn.githack.com/sineatah3/balatro-new-web-version/v1.0.0/source.zip")).arrayBuffer()).buffer;return b;}
