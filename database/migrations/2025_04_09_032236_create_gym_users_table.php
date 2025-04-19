<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gym_users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('password');
            $table->float('height');
            $table->enum('height_unit', ['cm', 'ft']);
            $table->float('weight');
            $table->enum('weight_unit', ['kg', 'lbs']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gym_users');
    }
};
