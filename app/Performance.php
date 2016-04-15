<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Performance extends Model
{
    /**
     * The name of the underlying table.
     *
     * @var string
     */
    protected $table = 'performance_stats';

    /**
     * Scope the query to records created this year.
     *
     * @param  Builder $query
     * @return mixed
     */
    public function scopeThisYear($query)
    {
        return $query->where('created_at', '>=', Carbon::now()->firstOfYear());
    }
}
