<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    /**
     * @var string
     */
    protected $table = 'members';

    /**
     * Get Type of the Member
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function memberType()
    {
        return $this->belongsTo('App\MemberType');
    }
}
