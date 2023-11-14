import cluster from 'node:cluster'
import { cpus } from 'node:os'

if(cluster.isPrimary) {
    const cpuNumber = cpus().length
    console.log('Tengo muchos cpus: ', cpus().length)
    console.log('Soy el cluster primary! Behold!')
    console.log(process.pid)
    for(let i = 0; i < cpuNumber; i++) {
        cluster.fork()
    }
} else {
    console.log(process.pid)
    console.log('Mi primera chamba...')
}