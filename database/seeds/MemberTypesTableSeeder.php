<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MemberTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('member_types')->insert([
            'name' => 'founder'
        ]);

        DB::table('member_types')->insert([
            'name' => 'member'
        ]);

        DB::table('member_types')->insert([
            'name' => 'contributor'
        ]);
    }
}
