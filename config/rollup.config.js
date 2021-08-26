import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from "rollup-plugin-commonjs";

export default {
  input:"resource/index.js",
  output: [
    {
      file:'dist/tool.prod.js',
      format:'iife',
      banner:'/*  prod 模式  */'
    },
    {
      file:'dist/tool.dev.js',
      format:'cjs',
      banner:'/*  dev 模式  */'
    }
  ],
  plugins:[
    resolve({
      browser:true
    }),
    commonjs(),
    babel({
      exclude:'node_modules/**'
    })
  ]
}
