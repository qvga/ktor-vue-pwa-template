package com.example

import io.ktor.application.Application
import io.ktor.http.content.default
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.routing.routing

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)


@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {

    routing {
        static("/") {
            resources("static")
            default("index.html")
        }
    }
}
