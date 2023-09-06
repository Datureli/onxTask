@extends('app')

@section('content')
  <div id="app"> 
    <register-form></register-form>
  </div>
  @foreach ($users as $user)
        Hello, {{ $user->name }} <br />
    @endforeach
@endsection