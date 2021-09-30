import { initPostback } from "weaponx-utilities"

const main = async () => {
    const postbackData = "Here is some data"
    const urls = process.argv.slice(2).map(x => ({url: `http://localhost:3001/${x}`}))
    const postback = initPostback(urls)

      /*const postback = initPostback([
        {
            url: 'http://localhost:3001/postback'
        },
        {
            url: 'http://localhost:3001/broken'
        },
        {
            url: 'http://localhost:3001/lazy'
        },
        {
            url: 'http://localhost:3001/unresponsive'
        },
        {
            url: 'http://localhost:3001/rude'
        },
        {
            url: 'http://localhost:3001/invalidendpoint'
        }
    ])*/

    console.log("Sending first request")
    postback(postbackData)

    await sleep(10000)
    console.log("Sending second request")
    postback(postbackData)

    await sleep(10000)
    console.log("Sending third request")
    postback(postbackData)

    await sleep(10000)
    console.log("Sending fourth request")
    postback(postbackData)

    await sleep(10000)
    console.log("Sending fifth request")
    postback(postbackData)

    await sleep(10000)
    console.log("Sending sixth request")
    postback(postbackData)

    await sleep(10000)
    console.log("Sending seventh request")
    postback(postbackData)
}

const sleep = (ms) => {
    return new Promise(res => setTimeout(res, ms))
}

const readArgs = () => {
    console.log(urls)
}

main()
//readArgs()
