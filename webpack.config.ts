import webpack from 'webpack'

import path from 'path'

import { buildWebpack } from './config/build/buildWebpack'
import { BuildDevice, BuildMode, BuildPaths } from './config/types'

interface EnvVariables {
    mode?: BuildMode
    port?: number
    device?: BuildDevice
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'app', 'main.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 4000,
        mode: env.mode ?? 'development',
        paths,
        device: env.device ?? 'desktop'
    })

    return config
}
