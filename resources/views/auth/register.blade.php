@extends('app')

@section('content')
  <div id="app"> 
    <register-form></register-form>
  </div>
      @foreach($users as $user)
            <tr>
                <td>{{ $user->name }}</td>
                <td>{{ $user->email }}</td>
            </tr>
            @endforeach
@endsection