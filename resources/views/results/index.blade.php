<table>
	<tr>
		<td>id</td>
		<td>wpm</td>
		<td>wordcount</td>
		<td>errors</td>
		<td>Test Time</td>
	</tr>
	@foreach ($results as $result)
	<tr>
		<td>{{ $result->id }}</td>
		<td>{{ $result->wpm }}</td>
		<td>{{ $result->wordcount }}</td>
		<td>{{ $result->errors }}</td>
		<td>{{ $result->created_at }}</td>
	</tr>
	@endforeach
</table>