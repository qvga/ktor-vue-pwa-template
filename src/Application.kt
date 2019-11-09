package com.example

import io.ktor.application.Application
import io.ktor.http.content.*
import io.ktor.routing.routing
import java.io.File

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)


@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {

    routing {
        static("") {
            staticRootFolder = File("web-dist")
            files("js")
            files("images")
            files(".")
            default("index.html")
        }
    }
}
