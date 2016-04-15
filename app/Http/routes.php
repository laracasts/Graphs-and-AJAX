<?php

use App\Performance;

// Simulate a logged in user.
Auth::loginUsingId(1);


Route::get('/', function () {
    return view('welcome', compact('revenue'));
});

Route::group(['middleware' => 'admin'], function () {

    Route::get('api/revenue', function () {
        return Performance::thisYear()
            ->selectRaw('strftime("%m", created_at) as month, sum(revenue) as revenue')
            ->groupBy('month')
            ->pluck('revenue', 'month');
    });

});


