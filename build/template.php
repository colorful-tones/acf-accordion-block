<?php
/**
 * Accordion block.
 */

$wrapper_attributes = get_block_wrapper_attributes(
	[
		'class' => 'accordion'
	]
);
?>

<div <?php echo $wrapper_attributes; ?>>
	<?php if ( empty( get_field( 'accordion_item' ) ) ) : ?>
		<p class="acf-accordion-block-empty-state"><?php esc_html_e( 'Please add some content in the sidebar.', 'acf-accordion-block' ); ?> →</p>
	<?php endif; ?>

	<?php
	foreach ( get_field( 'accordion_item' ) as $accordion_item ) :
		$heading = $accordion_item['accordion_heading'] ? $accordion_item['accordion_heading'] : 'Your heading goes here';
		$content = $accordion_item['accordion_content'] ? $accordion_item['accordion_content'] : 'Your content goes here...';
		?>
		<button class="accordion-header" type="button">
			<span class="accordion-title">
				<?php echo esc_html( $heading ); ?>
				<span class="accordion-icon"></span>
			</span>
		</button>

		<div class="accordion-content">
			<h2 class="accordion-label"><?php echo esc_html( $heading ); ?></h2>
			<?php echo $content; ?>
		</div><!-- .accordion-content -->

		<?php
		endforeach;
	?>
</div><!-- .accordion -->
