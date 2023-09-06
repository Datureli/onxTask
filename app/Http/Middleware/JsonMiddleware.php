<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class JsonMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Ustaw nagłówek Accept na application/json
        $request->headers->set("Accept", "application/json");
        
        // Przesuń żądanie dalej w middleware
        return $next($request);
    }
}
