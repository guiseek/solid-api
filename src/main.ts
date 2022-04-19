import { server } from './app/app'

import './app/devs'

const port = 3333

server.listen(port, () => console.log(`http://localhost:${port}`))
