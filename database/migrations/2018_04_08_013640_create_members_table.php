<?php

use App\MemberType;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name_kh');
            $table->string('name_en');
            $table->string('gender');
            $table->string('avatar');
            $table->string('position')->nullable();
            $table->string('institution')->nullable();
            $table->string('description');
            $table->date('joined_at')->nullable();
            $table->date('left_at')->nullable();
            $table->unsignedInteger('type_id');
            $table->timestamps();

            $table->foreign('type_id')
                ->references('id')->on('member_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
