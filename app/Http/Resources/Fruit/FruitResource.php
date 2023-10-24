<?php

namespace App\Http\Resources\Fruit;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FruitResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
        ];
    }
}
