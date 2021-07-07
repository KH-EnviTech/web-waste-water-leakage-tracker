<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MemberType extends Model
{
    protected $table = 'member_types';

    /**
     * Get the Member under the Member Type
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function member()
    {
        return $this->hasMany('App\Member');
    }
}
